"use client"
import styles from './AboutBlock.module.css';
import React from 'react';
import Image from 'next/image';
export const MemberComponent = ({ name, role, description, avatarUrl }) => {
    return (
        <div className={styles.member}>
            <img src={avatarUrl} alt="Avatar"  />
            <h2>{name}</h2>
            <p>{role}</p>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};
