import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24, 
      backgroundColor: colors.background,
    },
    eventName: {
      color: colors.white,
      fontSize: 24,
      fontWeight: 'bold',
    },
    eventDate: {
        color: colors.darkGray,
        fontSize: 14,
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: -30,
      marginBottom: 30,
      gap: 10
    },
    tasksCounterView: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 3,
      borderColor: colors.darkestGray,
      paddingBottom: 15,
      marginBottom:  50
    }
  });