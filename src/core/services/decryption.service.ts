import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class DecryptionService {
  private key = 'yutrtcfcbv876880kjlkhkjgjf';

  public decrypt(encryptedText: string): string {
    return CryptoJS.AES.decrypt(encryptedText.trim(), this.key).toString(CryptoJS.enc.Utf8);
  }
}
