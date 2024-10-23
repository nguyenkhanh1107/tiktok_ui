import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/0c28b96a320be477028ad4bfb4003027.jpeg?lk3s=a5d48078&nonce=550&refresh_token=03432e0be272c23a73ca67dbf3c53e41&x-expires=1729868400&x-signature=LQtLMXpie6iRfUYuNuyB%2FA1dk%2BY%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    anna
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Anna Tanaka</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>11.7M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>11.7M </strong>
                    <span className={cx('label')}>likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
