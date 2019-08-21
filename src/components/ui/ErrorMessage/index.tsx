import React from 'react';
import { useSelector } from "react-redux";
import {AppState} from '../../../reducers/index';
import styles from './index.module.css'
  
const ErrorMessage: React.FC = () => {
    const message = useSelector(({error}: AppState) => error.message);

    if (!message) {
        return null;
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <p>Please reload the page</p>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ErrorMessage;
