import { useRouter } from 'expo-router';
import { useRef } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ModalContents({
  setModalVisible,
}: {
  setModalVisible: (visible: boolean) => void;
}) {
  const router = useRouter();
  const panY = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 80) {
          setModalVisible(false);
          panY.setValue(0);
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', zIndex: 100 }}>
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }} />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.modalContent,
          { transform: [{ translateY: panY }], zIndex: 101 },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
          予定を追加
        </Text>
        {/* ここにフォームや入力UIを追加可能 */}
        <TouchableOpacity
          style={styles.modalAddButton}
          onPress={() => {
            router.push('/add-schedule');
          }}
        >
          <Text style={styles.modalAddButtonText}>新規追加</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    minHeight: 220,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
  },
  modalAddButton: {
    backgroundColor: '#34C759',
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  modalAddButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
