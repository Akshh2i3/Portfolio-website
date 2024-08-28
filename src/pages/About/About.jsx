import React, { useState, useEffect } from 'react';
import './About.scss';
import { Navbar, Footer } from '../../components';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import data from '../../data';

import Tilt from 'react-parallax-tilt';
import lc from './../../assets/leetcode.jpg';
import gh from './../../assets/github.jpg';

import Clang from '../../assets/Clang.png';
import reactIcon from '../../assets/react.png';
import redux from '../../assets/redux.png';
import cpp from '../../assets/cpp.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import ts from '../../assets/ts.png';
import node from '../../assets/node.png';
import mongodb from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.png';
import express from '../../assets/express.png';
import faceImage from '../../assets/faceImage.jpg'
import '../../background.css';

const About = () => {
  const [rotate, setRotate] = useState({
    c: false,
    html: false,
    cpp: false,
    scss: false,
    js: false,
    ts: false,
    react: false,
    redux: false,
    css: false,
    node: false,
    mongodb: false,
    mysql: false,
    express: false,
    figma: false,
    ps: false,
    ai: false,
    xd: false,
  });

  const [leetcode, setLeetcode] = useState({});
  const [github, setGitHub] = useState({});

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/akshaysethiya')
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setLeetcode(data);

        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/akshh2i3')
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        setGitHub(data);
        // console.log(data);
      })
      .catch((e) => console.error(e));
  }, []);

  // console.log(gitHub);

  const toggleRotate = (key) => {
    setRotate((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <Navbar />
      <div className="contents">
        <h1 className="gradient__text">About</h1>
        <div className="main-info">
          <p>
            Hi, I'm {data.name} from {data.instituteName}. A{' '}
            <span style={{ fontStyle: 'italic' }}> {data.majorSkill1} </span>
            and {data.majorSkill2} {data.aboutYourself}
          </p>
          <Tilt>
            <LazyLoadImage
              // src={data.imageAbout}
              src={faceImage}
              height={'250'}
              width={'250'}
              alt={data.name}
            />
          </Tilt>
        </div>

        <div className="tech">
          <p>
            Here are a few technologies and Design tools I've been working with
            recently:
          </p>

          <div className="tech-items">
            <motion.div
              className="item"
              animate={{ rotate: rotate.c ? 360 : 0 }}
              onClick={() => {
                toggleRotate('c');
              }}
            >
              <img src={Clang} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.cpp ? 360 : 0 }}
              onClick={() => {
                toggleRotate('cpp');
              }}
            >
              <img src={cpp} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.html ? 360 : 0 }}
              onClick={() => {
                toggleRotate('html');
              }}
            >
              <img src={html} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.css ? 360 : 0 }}
              onClick={() => {
                toggleRotate('css');
              }}
            >
              <img src={css} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.js ? 360 : 0 }}
              onClick={() => {
                toggleRotate('js');
              }}
            >
              <img src={js} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.ts ? 360 : 0 }}
              onClick={() => {
                toggleRotate('ts');
              }}
            >
              <img src={ts} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.react ? 360 : 0 }}
              onClick={() => {
                toggleRotate('react');
              }}
            >
              <img src={reactIcon} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.redux ? 360 : 0 }}
              onClick={() => {
                toggleRotate('redux');
              }}
            >
              <img src={redux} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.node ? 360 : 0 }}
              onClick={() => {
                toggleRotate('node');
              }}
            >
              <img src={node} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.express ? 360 : 0 }}
              onClick={() => {
                toggleRotate('express');
              }}
            >
              <img src={express} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.mongodb ? 360 : 0 }}
              onClick={() => {
                toggleRotate('mongodb');
              }}
            >
              <img src={mongodb} alt="" />
            </motion.div>
            <motion.div
              className="item"
              animate={{ rotate: rotate.mysql ? 360 : 0 }}
              onClick={() => {
                toggleRotate('mysql');
              }}
            >
              <img src={mysql} alt="" />
            </motion.div>
          </div>
        </div>

        <div className="codingprofile">
          <h2 className="gradient__text">Coding Profiles</h2>

          <div className="coding-site">
            <div className="coding-profile-details">
              <img src={lc} alt="leetcode" />
              <a
                href="https://www.leetcode.com/akshaysethiya/"
                target="_blank"
                className="handle"
              >
                akshaysethiya
              </a>
              <p className="leetcode-data">{leetcode.totalSolved} Solved</p>
            </div>

            <div className="coding-profile-data">
              <p>easy : {leetcode.easySolved}</p>
              <p>medium : {leetcode.mediumSolved}</p>
              <p>hard : {leetcode.hardSolved}</p>
            </div>
          </div>

          <div className="coding-site">
            <div className="coding-profile-details">
              <img src={gh} alt="github" />
              <a
                href={github.html_url}
                target="_blank"
                className="handle"
              >
                {github.login}
              </a>
            </div>

            <div className="coding-profile-data">
              <p>public repository: {github.public_repos} </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
