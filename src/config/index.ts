import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  JWT_SECRET: '4tXutuR2pvxoHoaalvj55kARPABlq+NAsPy5HMtDlPih/62ZG2Z1NcKVjVcsNuWIzNrY0icXln7Dnj0M7aZdThu46IVhjR6AaHka2z4nnpOgBfrezzrrjxKEWDKSc+XopuvqPpCjgGdgBlhpIWySU2dqX1UKEx/CT3XHwrM9NYCwl8uHaN+4ILYesaAdASeIWCY/eLWmC+abPvwlw85AuCXcUprOQfoxbwYRSsozp/4xu0xF0V9dZ9oTT/RxvZQ5VBClwCKaawXuKBXqcq+kxfpaQWalLECdRvnbIU+sxde/97KAMq/YYw7EunBJbr7fHK5xu5A5L77xF+/hyCElPQ==',
  JWT_EXPIRATION: '1d',
}
