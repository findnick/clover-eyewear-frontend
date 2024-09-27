import axios from "axios";
import { APIS } from ".";
import { useState } from "react";

const baseModule = axios.create({
    baseURL: "https://tj6h9ng2-3000.inc1.devtunnels.ms/api/"
});

const useAPI = (api) => {
    const [loading, toggleLoading] = useState(false);
    async function fetchApi(body) {
        try {
            toggleLoading(true);
            const res = await api(body);
            return res;
        } catch (err) {
            console.error(err);
            return err;
        } finally {
            toggleLoading(false);
        }
    }

    return [fetchApi, loading];
};

export { baseModule, APIS, useAPI }