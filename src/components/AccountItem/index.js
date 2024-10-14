import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/736x/59/83/7e/59837ee309afd0392d8405977e33210d.jpg"
                alt="Anna"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Anna</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>anna</span>
            </div>
        </div>
    );
}

export default AccountItem;
