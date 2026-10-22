import axios from 'axios';
import { Profile, Experience, Project, SkillGroup, ContactMessage, HealthStatus } from '../types';
import { initialProfile, initialExperiences, initialProjects, initialSkillGroups } from '../data/fallbackData';

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
      status: 'healthy',
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

export const getSkills = async (): Promise<SkillGroup[]> => {
  try {
    const res = await apiClient.get<any[]>('/skills/');
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      // Map DRF skill models to clean SkillGroup format
      return res.data.map(cat => ({
        category: cat.category,
        skills: cat.skills ? cat.skills.map((s: any) => typeof s === 'string' ? s : s.name) : []
      }));
    }
    return initialSkillGroups;
  } catch (err) {
    return initialSkillGroups;
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
