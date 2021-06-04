/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO: export searchApiRef from ./apis once interface is stable and settled.
export {
  searchPlugin,
  searchPlugin as plugin,
  SearchPage,
  SearchPageNext,
  SearchBarNext,
  SearchResult,
  DefaultResultListItem,
} from './plugin';
export {
  Filters,
  FiltersButton,
  SearchBar,
  SearchContextProvider,
  useSearch,
  SearchPage as Router,
  SearchFilterNext,
  SidebarSearch,
} from './components';
export type { FiltersState } from './components';
