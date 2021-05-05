import {API_KEY, API_URL} from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */

export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                "Authorization": API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd! getTask');
        }

        successCallback(data.data);

    } catch (err) {
        console.log(err);
    }
};

export const addTask = async (newTask, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                "Authorization": API_KEY,
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(newTask),
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd! addTask');
        }

        successCallback(prev => [...prev, data.data]);

    } catch (err) {
        console.log(err);
    }
};

export const removeTask = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            headers: {
                "Authorization": API_KEY,
            },
            method: "delete",
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== 'function') {
            throw new Error('Błąd! deleteTask');
        }

        successCallback(prev => prev.filter(task => task.id !== id));

    } catch (err) {
        console.log(err);
    }
};
