import { Router, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { GITHUB_USERNAME = '', GITHUB_TOKEN = '' } = process.env || {};

const router = Router();

type GithubResponse = {
  id: string;
  topics: string[];
  name: string;
  html_url: string;
  homepage: string;
  description: string | null;
};

router.get('/projects', async (req: Request, res: Response) => {
  try {
    const headers = {
      Accept: 'application/vnd.github.mercy-preview+json',
      Authorization: `token ${GITHUB_TOKEN}`,
    };
    const { data }: AxiosResponse<GithubResponse[]> = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        headers,
      }
    );
    const projects = data
      .map((project) => ({
        id: project.id,
        name: project.name,
        topics: project.topics,
        url: project.html_url,
        homepage: project.homepage,
        description: project.description,
      }))
      // filtering the readme for github
      .filter((project) => project.name !== GITHUB_USERNAME);
    res.json(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
