import axios from "axios";

const API_URL = 'http://192.168.2.3:8080'

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confimDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}