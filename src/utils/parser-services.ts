/*
 * eslint-plugin-sonarjs
 * Copyright (C) 2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation,
 * version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */
import { ParserServices } from "@typescript-eslint/parser";

export type RequiredParserServices = { [k in keyof ParserServices]: Exclude<ParserServices[k], undefined> };

export function isRequiredParserServices(services: ParserServices): services is RequiredParserServices {
  return !!services && !!services.program && !!services.esTreeNodeToTSNodeMap;
}
