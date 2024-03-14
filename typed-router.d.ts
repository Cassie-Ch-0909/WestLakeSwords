/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/About/': RouteRecordInfo<'/About/', '/About', Record<never, never>, Record<never, never>>,
    '/AchievementRelease/': RouteRecordInfo<'/AchievementRelease/', '/AchievementRelease', Record<never, never>, Record<never, never>>,
    '/Agenda/': RouteRecordInfo<'/Agenda/', '/Agenda', Record<never, never>, Record<never, never>>,
    '/BigNames/': RouteRecordInfo<'/BigNames/', '/BigNames', Record<never, never>, Record<never, never>>,
    '/ExhibitorStyle/': RouteRecordInfo<'/ExhibitorStyle/', '/ExhibitorStyle', Record<never, never>, Record<never, never>>,
    '/Fingerpost/': RouteRecordInfo<'/Fingerpost/', '/Fingerpost', Record<never, never>, Record<never, never>>,
    '/Fingerpost/components/Hotel': RouteRecordInfo<'/Fingerpost/components/Hotel', '/Fingerpost/components/Hotel', Record<never, never>, Record<never, never>>,
    '/Fingerpost/components/Relationship': RouteRecordInfo<'/Fingerpost/components/Relationship', '/Fingerpost/components/Relationship', Record<never, never>, Record<never, never>>,
    '/Fingerpost/components/SignIn': RouteRecordInfo<'/Fingerpost/components/SignIn', '/Fingerpost/components/SignIn', Record<never, never>, Record<never, never>>,
    '/Fingerpost/components/Traffic': RouteRecordInfo<'/Fingerpost/components/Traffic', '/Fingerpost/components/Traffic', Record<never, never>, Record<never, never>>,
    '/Fingerpost/components/Venue': RouteRecordInfo<'/Fingerpost/components/Venue', '/Fingerpost/components/Venue', Record<never, never>, Record<never, never>>,
    '/hi/[name]': RouteRecordInfo<'/hi/[name]', '/hi/:name', { name: ParamValue<true> }, { name: ParamValue<false> }>,
    '/Home/': RouteRecordInfo<'/Home/', '/Home', Record<never, never>, Record<never, never>>,
    '/Home/components/Agenda/': RouteRecordInfo<'/Home/components/Agenda/', '/Home/components/Agenda', Record<never, never>, Record<never, never>>,
    '/Home/components/Agenda/AgendaStatistics': RouteRecordInfo<'/Home/components/Agenda/AgendaStatistics', '/Home/components/Agenda/AgendaStatistics', Record<never, never>, Record<never, never>>,
    '/Home/components/Agenda/WaterCarousel': RouteRecordInfo<'/Home/components/Agenda/WaterCarousel', '/Home/components/Agenda/WaterCarousel', Record<never, never>, Record<never, never>>,
    '/Home/components/Carousel/': RouteRecordInfo<'/Home/components/Carousel/', '/Home/components/Carousel', Record<never, never>, Record<never, never>>,
    '/Home/components/Carousel/BoxReflect': RouteRecordInfo<'/Home/components/Carousel/BoxReflect', '/Home/components/Carousel/BoxReflect', Record<never, never>, Record<never, never>>,
    '/Home/components/ExcitingActivities/': RouteRecordInfo<'/Home/components/ExcitingActivities/', '/Home/components/ExcitingActivities', Record<never, never>, Record<never, never>>,
    '/Home/components/ExcitingActivities/SlideButtonTab': RouteRecordInfo<'/Home/components/ExcitingActivities/SlideButtonTab', '/Home/components/ExcitingActivities/SlideButtonTab', Record<never, never>, Record<never, never>>,
    '/Home/components/ExcitingActivities/SudokuImageAnimation': RouteRecordInfo<'/Home/components/ExcitingActivities/SudokuImageAnimation', '/Home/components/ExcitingActivities/SudokuImageAnimation', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/': RouteRecordInfo<'/Home/components/Highlights/', '/Home/components/Highlights', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/GlassMimicry1': RouteRecordInfo<'/Home/components/Highlights/GlassMimicry1', '/Home/components/Highlights/GlassMimicry1', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/GlassMimicry2': RouteRecordInfo<'/Home/components/Highlights/GlassMimicry2', '/Home/components/Highlights/GlassMimicry2', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/LineCombination': RouteRecordInfo<'/Home/components/Highlights/LineCombination', '/Home/components/Highlights/LineCombination', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/ModuleTitle': RouteRecordInfo<'/Home/components/Highlights/ModuleTitle', '/Home/components/Highlights/ModuleTitle', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/PeopleAnimation/': RouteRecordInfo<'/Home/components/Highlights/PeopleAnimation/', '/Home/components/Highlights/PeopleAnimation', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/PeopleAnimation/Animation': RouteRecordInfo<'/Home/components/Highlights/PeopleAnimation/Animation', '/Home/components/Highlights/PeopleAnimation/Animation', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/ShakeButton': RouteRecordInfo<'/Home/components/Highlights/ShakeButton', '/Home/components/Highlights/ShakeButton', Record<never, never>, Record<never, never>>,
    '/Home/components/Highlights/WaveFont': RouteRecordInfo<'/Home/components/Highlights/WaveFont', '/Home/components/Highlights/WaveFont', Record<never, never>, Record<never, never>>,
    '/Home/components/ImportantGuests/': RouteRecordInfo<'/Home/components/ImportantGuests/', '/Home/components/ImportantGuests', Record<never, never>, Record<never, never>>,
    '/Home/components/NewsReport/': RouteRecordInfo<'/Home/components/NewsReport/', '/Home/components/NewsReport', Record<never, never>, Record<never, never>>,
    '/Home/components/NewsReport/OrientationSenseCard': RouteRecordInfo<'/Home/components/NewsReport/OrientationSenseCard', '/Home/components/NewsReport/OrientationSenseCard', Record<never, never>, Record<never, never>>,
    '/Home/components/Partner/': RouteRecordInfo<'/Home/components/Partner/', '/Home/components/Partner', Record<never, never>, Record<never, never>>,
    '/jjy/cassie': RouteRecordInfo<'/jjy/cassie', '/jjy/cassie', Record<never, never>, Record<never, never>>,
    '/MediaCenter/': RouteRecordInfo<'/MediaCenter/', '/MediaCenter', Record<never, never>, Record<never, never>>,
    '/WonderfulActivities/': RouteRecordInfo<'/WonderfulActivities/', '/WonderfulActivities', Record<never, never>, Record<never, never>>,
    '/WonderfulActivities/SlideButtonTab': RouteRecordInfo<'/WonderfulActivities/SlideButtonTab', '/WonderfulActivities/SlideButtonTab', Record<never, never>, Record<never, never>>,
    '/WonderfulActivities/SudokuImageAnimation': RouteRecordInfo<'/WonderfulActivities/SudokuImageAnimation', '/WonderfulActivities/SudokuImageAnimation', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
