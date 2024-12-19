## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## MariaDB command to create the database

```sql
CREATE SCHEMA IF NOT EXISTS buzzbids;

CREATE TABLE IF NOT EXISTS buzzbids.users (
  userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName varchar(500) DEFAULT NULL,
  lastName varchar(500) DEFAULT NULL,
  phoneNumber varchar(500) UNIQUE DEFAULT NULL,
  emailAddress varchar(500) UNIQUE DEFAULT NULL,
  dateOfBirth date DEFAULT NULL,
  houseAddress varchar(500) DEFAULT NULL,
  postcode varchar(500) DEFAULT NULL,
  role varchar(500) DEFAULT NULL,
  score float DEFAULT NULL,
  password varchar(255) DEFAULT NULL
);

CREATE UNIQUE INDEX buzzbids_userID ON buzzbids.users (userID);
CREATE UNIQUE INDEX buzzbids_phoneNumber ON buzzbids.users (phoneNumber);
CREATE UNIQUE INDEX buzzbids_emailAddress ON buzzbids.users (emailAddress);

CREATE TABLE IF NOT EXISTS buzzbids.sessions (
  sessionID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID int DEFAULT NULL,
  expiresAt Date DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS buzzbids.auctions (
  auctionID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  itemName varchar(500) DEFAULT NULL,
  itemType varchar(500) DEFAULT NULL,
  sellerID int DEFAULT NULL,
  startingPrice float DEFAULT NULL,
  timeStarted datetime DEFAULT NULL,
  timeExpire datetime DEFAULT NULL,
  minimumPrice float DEFAULT NULL,
  state varchar(500) DEFAULT NULL,
  currentBid int DEFAULT NULL
);

CREATE UNIQUE INDEX buzzbids_auctionID ON buzzbids.auctions (auctionID);
CREATE INDEX buzzbids_sellerID ON buzzbids.auctions (sellerID);
CREATE INDEX buzzbids_currentBid ON buzzbids.auctions (currentBid);

CREATE TABLE IF NOT EXISTS buzzbids.reviews (
  reviewID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review int DEFAULT NULL,
  userID int DEFAULT NULL,
  reviewerID int DEFAULT NULL
);

CREATE UNIQUE INDEX buzzbids_reviewID ON buzzbids.reviews (reviewID);
CREATE INDEX buzzbids_userID ON buzzbids.reviews (userID);
CREATE INDEX buzzbids_reviewerID ON buzzbids.reviews (reviewerID);

CREATE TABLE IF NOT EXISTS buzzbids.bids (
  bidID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  auctionID int DEFAULT NULL,
  userID int DEFAULT NULL,
  amount float DEFAULT NULL
);

CREATE UNIQUE INDEX buzzbids_bidID ON buzzbids.bids (bidID);
CREATE INDEX buzzbids_userID ON buzzbids.bids (userID);
CREATE INDEX buzzbids_auctionID ON buzzbids.bids (auctionID);

ALTER TABLE buzzbids.auctions ADD CONSTRAINT auctions_ibfk_1 FOREIGN KEY (sellerID) REFERENCES buzzbids.users (userID);
ALTER TABLE buzzbids.auctions ADD CONSTRAINT auctions_ibfk_2 FOREIGN KEY (currentBid) REFERENCES buzzbids.bids (bidID);
ALTER TABLE buzzbids.bids ADD CONSTRAINT bids_ibfk_1 FOREIGN KEY (userID) REFERENCES buzzbids.users (userID);
ALTER TABLE buzzbids.bids ADD CONSTRAINT bids_ibfk_2 FOREIGN KEY (auctionID) REFERENCES buzzbids.auctions (auctionID);
ALTER TABLE buzzbids.reviews ADD CONSTRAINT reviews_ibfk_1 FOREIGN KEY (userID) REFERENCES buzzbids.users (userID);
ALTER TABLE buzzbids.reviews ADD CONSTRAINT reviews_ibfk_2 FOREIGN KEY (reviewerID) REFERENCES buzzbids.users (userID);
ALTER TABLE buzzbids.sessions ADD CONSTRAINT sessions_ibfk_1 FOREIGN KEY (userID) REFERENCES buzzbids.users (userID);
```

## Eventually, the website will be deployed on the server which already has the database :p