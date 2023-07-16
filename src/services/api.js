import axios from "axios";

const baseUrl = "http://localhost:3001";


export const getDesks = async () => { // 목록
    const { data } = await axios.get(`${baseUrl}/desks`);
    return data;
}

export const getDeskDetail = async (id) => { // 상세
    const { data } = await axios.get(`${baseUrl}/desks/${id}`);
    return data;
}

export const postDesk = async (desk) => { // 생성
    const { data } = await axios.post(`${baseUrl}/desks`, desk);
    return data;
}

export const deleteDesk = async (id) => { // 삭제
    const { data } = await axios.delete(`${baseUrl}/desks/${id}`);
    return data;
}

export const putDesk = async (id, desk) => { // 수정
    const { data } = await axios.put(`${baseUrl}/desks/${id}`, desk);
    return data;
}