/**
 * Design Tokens
 * Autogenerated from tokens.json.
 * DO NOT EDIT!
 */

import {
  ParsedCubicBezierToken,
  ParsedDurationToken,
  ParsedTransitionToken,
} from '@cobalt-ui/core';

export declare const tokens: {
  'ease.circ-in': ParsedCubicBezierToken['$value'];
  'ease.circ-in-out': ParsedCubicBezierToken['$value'];
  'ease.circ-out': ParsedCubicBezierToken['$value'];
  'ease.cubic-in': ParsedCubicBezierToken['$value'];
  'ease.cubic-in-out': ParsedCubicBezierToken['$value'];
  'ease.cubic-out': ParsedCubicBezierToken['$value'];
  'ease.linear': ParsedCubicBezierToken['$value'];
  'timing.deliberate': ParsedDurationToken['$value'];
  'timing.instant': ParsedDurationToken['$value'];
  'timing.moderate': ParsedDurationToken['$value'];
  'timing.quick': ParsedDurationToken['$value'];
  'timing.slow': ParsedDurationToken['$value'];
  'transition.circ-in-deliberate': ParsedTransitionToken['$value'];
  'transition.circ-in-instant': ParsedTransitionToken['$value'];
  'transition.circ-in-moderate': ParsedTransitionToken['$value'];
  'transition.circ-in-out-deliberate': ParsedTransitionToken['$value'];
  'transition.circ-in-out-instant': ParsedTransitionToken['$value'];
  'transition.circ-in-out-moderate': ParsedTransitionToken['$value'];
  'transition.circ-in-out-quick': ParsedTransitionToken['$value'];
  'transition.circ-in-out-slow': ParsedTransitionToken['$value'];
  'transition.circ-in-quick': ParsedTransitionToken['$value'];
  'transition.circ-in-slow': ParsedTransitionToken['$value'];
  'transition.circ-out-deliberate': ParsedTransitionToken['$value'];
  'transition.circ-out-instant': ParsedTransitionToken['$value'];
  'transition.circ-out-moderate': ParsedTransitionToken['$value'];
  'transition.circ-out-quick': ParsedTransitionToken['$value'];
  'transition.circ-out-slow': ParsedTransitionToken['$value'];
  'transition.cubic-in-deliberate': ParsedTransitionToken['$value'];
  'transition.cubic-in-instant': ParsedTransitionToken['$value'];
  'transition.cubic-in-moderate': ParsedTransitionToken['$value'];
  'transition.cubic-in-out-deliberate': ParsedTransitionToken['$value'];
  'transition.cubic-in-out-instant': ParsedTransitionToken['$value'];
  'transition.cubic-in-out-moderate': ParsedTransitionToken['$value'];
  'transition.cubic-in-out-quick': ParsedTransitionToken['$value'];
  'transition.cubic-in-out-slow': ParsedTransitionToken['$value'];
  'transition.cubic-in-quick': ParsedTransitionToken['$value'];
  'transition.cubic-in-slow': ParsedTransitionToken['$value'];
  'transition.cubic-out-deliberate': ParsedTransitionToken['$value'];
  'transition.cubic-out-instant': ParsedTransitionToken['$value'];
  'transition.cubic-out-moderate': ParsedTransitionToken['$value'];
  'transition.cubic-out-quick': ParsedTransitionToken['$value'];
  'transition.cubic-out-slow': ParsedTransitionToken['$value'];
  'transition.linear-deliberate': ParsedTransitionToken['$value'];
  'transition.linear-instant': ParsedTransitionToken['$value'];
  'transition.linear-moderate': ParsedTransitionToken['$value'];
  'transition.linear-quick': ParsedTransitionToken['$value'];
  'transition.linear-slow': ParsedTransitionToken['$value'];
};

export declare const meta: {
  'ease.circ-in': ParsedCubicBezierToken;
  'ease.circ-in-out': ParsedCubicBezierToken;
  'ease.circ-out': ParsedCubicBezierToken;
  'ease.cubic-in': ParsedCubicBezierToken;
  'ease.cubic-in-out': ParsedCubicBezierToken;
  'ease.cubic-out': ParsedCubicBezierToken;
  'ease.linear': ParsedCubicBezierToken;
  'timing.deliberate': ParsedDurationToken;
  'timing.instant': ParsedDurationToken;
  'timing.moderate': ParsedDurationToken;
  'timing.quick': ParsedDurationToken;
  'timing.slow': ParsedDurationToken;
  'transition.circ-in-deliberate': ParsedTransitionToken;
  'transition.circ-in-instant': ParsedTransitionToken;
  'transition.circ-in-moderate': ParsedTransitionToken;
  'transition.circ-in-out-deliberate': ParsedTransitionToken;
  'transition.circ-in-out-instant': ParsedTransitionToken;
  'transition.circ-in-out-moderate': ParsedTransitionToken;
  'transition.circ-in-out-quick': ParsedTransitionToken;
  'transition.circ-in-out-slow': ParsedTransitionToken;
  'transition.circ-in-quick': ParsedTransitionToken;
  'transition.circ-in-slow': ParsedTransitionToken;
  'transition.circ-out-deliberate': ParsedTransitionToken;
  'transition.circ-out-instant': ParsedTransitionToken;
  'transition.circ-out-moderate': ParsedTransitionToken;
  'transition.circ-out-quick': ParsedTransitionToken;
  'transition.circ-out-slow': ParsedTransitionToken;
  'transition.cubic-in-deliberate': ParsedTransitionToken;
  'transition.cubic-in-instant': ParsedTransitionToken;
  'transition.cubic-in-moderate': ParsedTransitionToken;
  'transition.cubic-in-out-deliberate': ParsedTransitionToken;
  'transition.cubic-in-out-instant': ParsedTransitionToken;
  'transition.cubic-in-out-moderate': ParsedTransitionToken;
  'transition.cubic-in-out-quick': ParsedTransitionToken;
  'transition.cubic-in-out-slow': ParsedTransitionToken;
  'transition.cubic-in-quick': ParsedTransitionToken;
  'transition.cubic-in-slow': ParsedTransitionToken;
  'transition.cubic-out-deliberate': ParsedTransitionToken;
  'transition.cubic-out-instant': ParsedTransitionToken;
  'transition.cubic-out-moderate': ParsedTransitionToken;
  'transition.cubic-out-quick': ParsedTransitionToken;
  'transition.cubic-out-slow': ParsedTransitionToken;
  'transition.linear-deliberate': ParsedTransitionToken;
  'transition.linear-instant': ParsedTransitionToken;
  'transition.linear-moderate': ParsedTransitionToken;
  'transition.linear-quick': ParsedTransitionToken;
  'transition.linear-slow': ParsedTransitionToken;
};

export declare const modes: Record<string, never>;

export declare function token<K extends keyof typeof tokens>(tokenID: K, modeName?: never): typeof tokens[K];
export declare function token<K extends keyof typeof modes, M extends keyof typeof modes[K]>(tokenID: K, modeName: M): typeof modes[K][M];
