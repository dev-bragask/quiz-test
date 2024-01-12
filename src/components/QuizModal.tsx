import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

interface QuizModalProps {
  isVisible: boolean;
  score: number;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isVisible, onClose, score }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Quiz Completed!</Text>
        <Text style={styles.modalText}>Your Score: {score}/10</Text>
        <TouchableOpacity style={styles.modalButton} onPress={onClose}>
          <Text style={styles.modalButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#21BDCA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default QuizModal;
