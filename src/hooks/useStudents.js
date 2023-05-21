/* eslint-disable consistent-return */
import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const { data } = await axios.get('/groups');
      return data.groups;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      if (!groupId) return;
      const { data } = await axios.get(`/students/${groupId}`);
      return data.students;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post('/students/search', {
        searchPhrase,
      });
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteStudent = () => {
    console.log('delete student');
  };

  return {
    getGroups,
    getStudents,
    findStudents,
    deleteStudent,
  };
};
