export enum ErrorCode {
  CONVERSATION_LIMIT = 'CONVERSATION_LIMIT',
  UNKOWN_ERROR = 'UNKOWN_ERROR',
  CHATGPT_CLOUDFLARE = 'CHATGPT_CLOUDFLARE',
  CHATGPT_UNAUTHORIZED = 'CHATGPT_UNAUTHORIZED',
  CHATGPT_AUTH = 'CHATGPT_AUTH',
  GPT4_MODEL_WAITLIST = 'GPT4_MODEL_WAITLIST',
  BING_UNAUTHORIZED = 'BING_UNAUTHORIZED',
  BING_CAPTCHA = 'BING_CAPTCHA',
  API_KEY_NOT_SET = 'API_KEY_NOT_SET',
  BARD_EMPTY_RESPONSE = 'BARD_EMPTY_RESPONSE',
  MISSING_POE_HOST_PERMISSION = 'MISSING_POE_HOST_PERMISSION',
  POE_UNAUTHORIZED = 'POE_UNAUTHORIZED',
  MISSING_HOST_PERMISSION = 'MISSING_HOST_PERMISSION',
  XUNFEI_UNAUTHORIZED = 'XUNFEI_UNAUTHORIZED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  POE_MESSAGE_LIMIT = 'POE_MESSAGE_LIMIT',
  LMSYS_SESSION_EXPIRED = 'LMSYS_SESSION_EXPIRED',
  CHATGPT_INSUFFICIENT_QUOTA = 'CHATGPT_INSUFFICIENT_QUOTA',
  CLAUDE_WEB_UNAUTHORIZED = 'CLAUDE_WEB_UNAUTHORIZED',
  CLAUDE_WEB_UNAVAILABLE = 'CLAUDE_WEB_UNAVAILABLE',
  QIANWEN_WEB_UNAUTHORIZED = 'QIANWEN_WEB_UNAUTHORIZED',
  BAICHUAN_WEB_UNAUTHORIZED = 'BAICHUAN_WEB_UNAUTHORIZED',
}

export class ChatError extends Error {
  code: ErrorCode
  constructor(message: string, code: ErrorCode) {
    super(message)
    this.code = code
  }
}
