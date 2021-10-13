FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV MONGO_URL=mongodb+srv://manali:imdbu2N4K1WARKzl@zomato-master.c8dgf.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=386029873751-braplj10idoi2v2od55ogbm9n48g6s5b.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=DQoG4YZqWHvA0CsLoZzo1QmS
ENV AWS_ACCESS_KEY_ID=AKIAXFR5K2PBCPIQAEWN
ENV AWS_SECRET_ACCESS_KEY=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
ENV MAILGUN__API__KEY=4d1562e6cea0a96cad860c0bbf4729af-a3c55839-7b14a11e
ENV MAILGUN__DOMAIN=sandboxe761b6825adf4c078c9fc2c080823bed.mailgun.org
ENV RZR_PAY_ID=rzp_test_maL1QD4x6YrOjF
ENV RZR_PAY_SECRET=8d2a93f6d65ab452667b0b3a9dabf9a2

CMD ["npm", "run", "start"]