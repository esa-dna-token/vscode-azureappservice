/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as path from 'path';

export const resourcesPath = path.join(__dirname, '..', 'resources'); // (relative to dist folder)

export const deploymentFileName: string = '.deployment';
export const deploymentFile: string = `[config]
SCM_DO_BUILD_DURING_DEPLOYMENT=true`;
export const none: string = 'None';

export const extensionPrefix: string = 'appService';
export enum runtimes {
    node = 'node',
    php = 'php',
    dotnetcore = 'dotnetcore',
    ruby = 'ruby',
    tomcat = 'tomcat',
    javase = 'java|8-jre8',
    python = 'python'
}

export enum configurationSettings {
    zipIgnorePattern = 'zipIgnorePattern',
    showBuildDuringDeployPrompt = 'showBuildDuringDeployPrompt',
    deploySubpath = 'deploySubpath',
    advancedCreation = 'advancedCreation',
    defaultWebAppToDeploy = 'defaultWebAppToDeploy',
    connections = 'connections'
}

export enum ScmType {
    None = 'None', // default scmType
    LocalGit = 'LocalGit',
    GitHub = 'GitHub'
}

export const envFileName: string = '.env';
export const toggleValueVisibilityCommandId: string = 'appService.toggleValueVisibility';
