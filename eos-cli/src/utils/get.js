import { getAll } from './rc';
import downloadGit from 'download-git-repo';
import 'babel-polyfill';

export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();
    console.log('查看当前的config输出--->', config)
    let api = `${config.registry}/${templateName}`;
    return new Promise((resolve, reject) => {
        downloadGit(api, projectName, (err) => {
            if (err) {
                console.log('查看当前输出报错-->', err)
                reject(err);
            }
            resolve();
        });
    });
}