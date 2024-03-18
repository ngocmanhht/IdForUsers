import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onMutate: () => {
        console.log('mutated');
      },

      onSettled: () => {
        console.log('settle');
      },
    },
  },
});

export default queryClient;
