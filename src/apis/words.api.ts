import { callApi, get, post } from '../common/apiUtils';
import '../types/Words'
import { UrlUtils } from "../common/urlUtils";

export async function insertWords(word: Words): Promise<Words> {
   let words = await post(UrlUtils.getWordsUrl(), word);
   var result = words.data as Words;
   return result;
}

export async function getAll(): Promise<Words> {
   let word = await get(`${UrlUtils.getWordsUrl()}/getAll`);
   var result = word.data as Words;
   return result;
}