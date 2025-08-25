import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const familyMembers = [
  { id: '1', name: 'お父さん', color: '#007AFF', isDriver: true },
  { id: '2', name: 'お母さん', color: '#FF3B30', isDriver: true },
  { id: '3', name: '太郎', color: '#34C759', isDriver: false },
  { id: '4', name: '花子', color: '#FF9500', isDriver: false },
];

export default function FamilyScreen() {
  return (
    <SafeAreaView style={familyStyles.container}>
      <View style={familyStyles.header}>
        <Text style={familyStyles.headerTitle}>家族メンバー</Text>
        <TouchableOpacity style={familyStyles.addButton}>
          <Ionicons name='person-add' size={24} color='#007AFF' />
        </TouchableOpacity>
      </View>

      <ScrollView style={familyStyles.content}>
        {familyMembers.map(member => (
          <View key={member.id} style={familyStyles.memberItem}>
            <View
              style={[
                familyStyles.colorIndicator,
                { backgroundColor: member.color },
              ]}
            />
            <View style={familyStyles.memberInfo}>
              <Text style={familyStyles.memberName}>{member.name}</Text>
              <Text style={familyStyles.memberStatus}>
                {member.isDriver ? '運転可能' : '運転不可'}
              </Text>
            </View>
            <TouchableOpacity style={familyStyles.editButton}>
              <Ionicons name='chevron-forward' size={20} color='#C7C7CC' />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// 家族管理画面のスタイル
const familyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  addButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  colorIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  memberStatus: {
    fontSize: 14,
    color: '#8E8E93',
  },
  editButton: {
    padding: 8,
  },
});
