import { callApi, get, post } from '../common/apiUtils';
import '../types/Words'
import { UrlUtils } from "../common/urlUtils";
import { List } from 'lodash';

export async function chetGetWords(message: string): Promise<Array<Vocabulary>> {
   let request : ChatRequest = {
         messages: message
   };
   let vocabularies = await post(`${UrlUtils.getChatUrl()}`, request);
   var result = vocabularies.data as Array<Vocabulary>;
   return result;
}