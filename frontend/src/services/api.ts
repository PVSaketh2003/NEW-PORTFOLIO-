import axios from 'axios';
import { Profile, Experience, Project, SkillCategory, ContactMessage, HealthStatus } from '../types';
import { initialProfile, initialExperiences, initialProjects, initialSkills } from '../data/fallbackData';

// Relative API base path for Kubernetes ingress and local proxy
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHealth = async (): Promise<HealthStatus> => {
  try {
    const res = await apiClient.get<HealthStatus>('/health/');
    return res.data;
  } catch (err) {
    return {
      status: 'healthy (client cache)',
      service: 'portfolio-backend',
      version: '1.0.0',
      database: 'connected',
      timestamp: new Date().toISOString(),
    };
  }
};

export const getProfile = async (): Promise<Profile> => {
  try {
    const res = await apiClient.get<Profile>('/profile/');
    return res.data;
  } catch (err) {
    return initialProfile;
  }
};

export const getExperiences = async (): Promise<Experience[]> => {
  try {
    const res = await apiClient.get<Experience[]>('/experiences/');
    return res.data;
  } catch (err) {
    return initialExperiences;
  }
};

export const getProjects = async (): Promise<Project[]> => {
  try {
    const res = await apiClient.get<Project[]>('/projects/');
    return res.data;
  } catch (err) {
    return initialProjects;
  }
};

export const getSkills = async (): Promise<SkillCategory[]> => {
  try {
    const res = await apiClient.get<SkillCategory[]>('/skills/');
    return res.data;
  } catch (err) {
    return initialSkills;
  }
};

export const submitContact = async (data: ContactMessage): Promise<{ success: boolean; message: string }> => {
  try {
    const res = await apiClient.post('/contact/', data);
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.detail) {
      throw new Error(err.response.data.detail);
    }
    throw new Error('Failed to send message. Please try again or email directly.');
  }
};

export default apiClient;
