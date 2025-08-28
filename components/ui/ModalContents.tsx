import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalContents({
  setModalVisible,
}: {
  setModalVisible: (visible: boolean) => void;
}) {
  const router = useRouter();

  const handleRouter = useCallback(() => {
    router.push('/add-schedule');
  }, [router]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.overlay} />
      </TouchableOpacity>
      <SafeAreaView>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>予定を追加</Text>
          {/* ここにフォームや入力UIを追加可能 */}
          <TouchableOpacity
            style={styles.modalAddButton}
            onPress={handleRouter}
          >
            <Text style={styles.modalAddButtonText}>新規追加</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
  },
  modalContentWrapper: {
    backgroundColor: '#ffffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
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
    marginHorizontal: 24,
    marginVertical: 12,
  },
  modalAddButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
