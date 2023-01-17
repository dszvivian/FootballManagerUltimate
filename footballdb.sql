CREATE TABLE users ( 
    userid int not null auto_increment primary key, 
    username  VARCHAR(255) NOT NULL unique, 
    email varchar(255) not null unique,
    uPassword INT NOT NULL );


CREATE TABLE manager (
    mid INT NOT NULL AUTO_INCREMENT , 
    mname VARCHAR(255) NOT NULL , 
    uid INT NOT NULL , 
    PRIMARY KEY (mid),
    foreign key(uid) references users(uid)on delete cascade);


create table club(
    clubid int primary key auto_increment,
    clubname varchar(60) not null,
    clubformation varchar(10) not null,
    mid int not null, 
    foreign key(mid) references manager(mid) on delete cascade);


create table clubformation(
    clubid int primary key,
    gk int ,
    lb int ,
    lcb int ,
    rcb int ,
    rb int ,
    lm int ,
    cm int ,
    rm int ,
    lw int ,
    st int ,
    rw int ,
    sub1 int ,
    sub2 int ,
    sub3 int ,
    sub4 int ,
    foreign key(clubid) references club(clubid) on delete cascade
    );


    create table player(
        pid int primary key,
        pname varchar(255),
        position varchar(10),
        country varchar(255),
        rating varchar(10),
        image varchar(255) );