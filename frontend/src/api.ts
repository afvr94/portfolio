import axios, { AxiosPromise } from 'axios';
import { Project } from './types';

const URL = process.env?.REACT_APP_BACKEND_URL || '';

export const getProjects = (): AxiosPromise<Project[]> => axios.get(`${URL}/github/projects`);
