import Toast, {ToastType} from 'react-native-toast-message';

const useToast = () => {
  const show = ({type, content}: {type: ToastType; content: string}) => {
    Toast.show({
      type: type,
      text2: content,
    });
  };

  return {show};
};

export default useToast;
