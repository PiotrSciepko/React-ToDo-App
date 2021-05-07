import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */

export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd!');
        }

        successCallback(data.data.reverse());

    } catch (err) {
        console.log(err);
    }
};

export const addOperation = async (id, newOperation, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(newOperation),
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd! addTask');
        }

        successCallback(prev => [data.data, ...prev]);

    } catch (err) {
        console.log(err);
    }
};

export const removeOperation = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/operations/${id}`, {
            headers: {
                "Authorization": API_KEY,
            },
            method: "delete",
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd! deleteOperation');
        }

        successCallback(prev => prev.filter(operation => operation.id !== id));

    } catch (err) {
        console.log(err);
    }
};