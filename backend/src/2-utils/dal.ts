import mysql from "mysql";
import appConfig from "./appConfig";


const ConnectionToSqlDataBase = mysql.createPool({
    host: appConfig.mySqlHost,
    user: appConfig.mySqlUser,
    password: appConfig.mySqlPassword,
    database: appConfig.mySqlDataBase
})

function execute(sql: string, ...data: any[]): Promise<any> {

    return new Promise<any>((res, rej) => {
        ConnectionToSqlDataBase.query(sql, data, (err, result) => {
            if (err) {
                rej(err)
                return;
            }
            res(result);
        })
    })

}
export default {
    execute
}