
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ba6eedba2f09881c0b0b1a1ac5f49dc2274fdce2e86f3d6522e716822a757d35'
    }
});