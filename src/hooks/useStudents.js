/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import axios from 'axios';
import { useCallback } from 'react';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const { data } = await studentsAPI.get('/groups');
      return data.groups;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      if (!groupId) return;
      const { data } = await studentsAPI.get(`/groups/${groupId}`);
      return data.students;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const { data } = await studentsAPI.get(`/students/${studentId}`);

      return data.students;
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post('/students/search', {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    getGroups,
    getStudentsByGroup,
    getStudentById,
    findStudents,
  };
};
