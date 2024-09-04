import { useNavigate } from "react-router-dom";
import style from "./Card.module.scss";

import { UserOutlined } from "@ant-design/icons";
import { CardProps } from "../../utils";
import { useTranslation } from "react-i18next";

const Card: React.FC<CardProps> = ({ guild }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div
      onClick={() =>
        guild.isBot
          ? navigate(`/guild/${guild.id}`)
          : (window.location.href =
              process.env.REACT_APP_DISCORD_INVITE_URI + guild.id)
      }
      className={style.container}
    >
      <div className={style.card}>
        {guild.icon ? (
          <img
            className={style.iconServer}
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`}
          ></img>
        ) : (
          <img
            className={style.iconServer}
            src='https://styles.redditmedia.com/t5_3b1wr/styles/communityIcon_qdbg6bz0bud71.png'
          />
        )}
        {guild.banner ? (
          <img
            className={style.background}
            src={`https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}?size=480`}
          />
        ) : (
          <img
            className={style.background}
            src='https://i.pinimg.com/originals/b6/07/6b/b6076bb4df9a3532e01ad33b4e563643.jpg'
          />
        )}
        {!guild.isBot && (
          <>
            <div className={style.backgroundShadow} />
            <div className={style.addbotbtn}>
              <a>{t('card.addbot')}</a>
            </div>
          </>
        )}
      </div>
      <div className={style.description}>
        <p className={style.title}>{guild.name}</p>
        <div className={style.onlineContent}>
          <p className={style.online}>
            {guild.approximate_member_count
              .toLocaleString('en-US')
              .replace(/,/g, ' ')}
          </p>
          <UserOutlined className={style.userIcon} />
        </div>
      </div>
    </div>
  );
};

export default Card;
