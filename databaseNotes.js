USER TABLE

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name varchar,
    user_name varchar NOT NULL,
    password varchar NOT NULL,
    zip int,
    participant_id int,
    hobby_id int,
    profile_picture_id int
  );

  INSERT INTO users (user_name, password, zip)
  VALUES ('fake', null, 96813)

  
  //HOBBY TABLE
  
  //   Table hobby {
  //     id int [pk, increment]
  //     hobby varchar
  //   }
  
  CREATE TABLE hobby (
    id SERIAL PRIMARY KEY,
    hobby varchar,
  );
  
  //PARTICPANTS TABLE
  //Table participants as P {
    //     id int [pk, increment] // primary key
    //     name varchar
    //   }

    CREATE TABLE participants (
      id SERIAL PRIMARY KEY,
      name varchar
    );

    //COMMENTS TABLE
    //Table comments as C {
      //     id int [pk, increment] // primary key
      //     name varchar
      //     start_date datetime
      //     comment varchar
      //   }

      CREATE TABLE comments (
        id SERIAL PRIMARY KEY,
        user_name varchar,
        time TIMESTAMP,
        comment varchar
      );


//   Table profile_picture {
//     id int [pk, increment]
//     picture varchar
//   }
  
//   Ref: U.hobby_id < hobby.id
//   Ref: U.profile_picture_id - profile_picture.id
//   Ref: U.user_name - comments.name

// Table events as E {
//     id int [pk, increment] // auto-increment
//     title varchar
//     start_date datetime
//     end_date datetime
//     activity_type varchar
//     num_participants int [default: 1]
//     zip int // inline relationship (many-to-one)
//     participant_id int
//     comment_id int
//   }
  
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title varchar,
    date DATE,
    start_time TIME,
    end_time TIME,
    activity_type varchar,
    num_participants int DEFAULT 1,
    zip int,
    participant_id int,
    comment_id int
)


//   Table participants as P {
//     id int [pk, increment] // primary key
//     name varchar
//   }
  
  
//   Ref: events.participant_id < participants.id
//   Ref: U.participant_id > participants.id
//   Ref: events.comment_id < comments.id