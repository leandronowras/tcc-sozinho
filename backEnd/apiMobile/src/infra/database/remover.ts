export default interface Query {
  query(statement: string, params: any[]): Promise<any>
}