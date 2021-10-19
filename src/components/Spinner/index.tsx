import { Component } from 'solid-js';
import styles from './gg-spinner.module.css'

type SpinnerSize = 'lg' | 'xl' | 'xxl'
type SpinnerProps = {
  size?: SpinnerSize
}


const Spinner: Component<SpinnerProps> = ({ size }) => <div class={`${styles['gg-spinner']} ${size && styles[size]}`}></div>;

export default Spinner;
