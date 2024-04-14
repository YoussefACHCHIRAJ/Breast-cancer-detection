import { useMutation } from 'react-query';
import axios from 'axios';

const useDiagnostic = ({onSuccess}) => {

    const query = useMutation(async ({file, selectedModel}) => {
        try {
            
            const formData = new FormData();
            
            formData.append('file', file);
            formData.append('selectedModel', selectedModel);
            
            const {data} = await axios.post("http://127.0.0.1:5000/upload", formData);
            
            onSuccess(data?.result);
            
            return data?.result;
        } catch (error) {
            console.log(Object.keys(error), error.message);
            const errorMessage = error?.response?.data?.error || `${error.message}: check your connection or try later.`
            throw {
                message: errorMessage
            }
        }
    }
    );

    return query;
}


export default useDiagnostic;