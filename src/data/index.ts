import type { Track } from "./types";
import { webTrack } from "./track-web";
import { reactTrack } from "./track-react";
import { backendTrack } from "./track-backend";
import { dsaTrack } from "./track-dsa";
import { pythonTrack } from "./track-python";
import { gitTrack } from "./track-git";
import { testingTrack } from "./track-testing";
import { devopsTrack } from "./track-devops";
import { securityTrack } from "./track-security";
import { architectureTrack } from "./track-architecture";
import { tailwindTrack } from "./track-tailwind";
import { stateTrack } from "./track-state";
import { apiTrack } from "./track-api";
import { typescriptTrack } from "./track-typescript";
import { performanceTrack } from "./track-performance";

export type { Track, Lesson } from "./types";
export type { Check, QuizQuestion } from "./types";

export const tracks: Track[] = [
  webTrack,
  reactTrack,
  backendTrack,
  dsaTrack,
  pythonTrack,
  gitTrack,
  testingTrack,
  devopsTrack,
  securityTrack,
  architectureTrack,
  tailwindTrack,
  stateTrack,
  apiTrack,
  typescriptTrack,
  performanceTrack,
];

export function findTrack(trackId: string) {
  return tracks.find((t) => t.id === trackId);
}

export function findLesson(trackId: string, lessonId: string) {
  return findTrack(trackId)?.lessons.find((l) => l.id === lessonId);
}

export function lessonKey(trackId: string, lessonId: string) {
  return trackId + "/" + lessonId;
}

export const totalLessonCount = tracks.reduce((n, t) => n + t.lessons.length, 0);
