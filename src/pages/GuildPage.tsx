import React, { useState, useRef, useEffect } from "react";
import style from "../styles/pages/GuildPage.module.scss";

const GuildPage: React.FC = () => {
  const [activeAttribute, setActiveAttribute] = useState<string>("Main");
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });  const attributes = ["Main", "Moderation", "Greeting", "Level", "Auditing", "AutoMod", "Other"];

  const languages = ["English", "Spanish", "German", "French", "Russian"];

  const attributeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = attributes.indexOf(activeAttribute);
    const activeElement = attributeRefs.current[activeIndex];
    if (activeElement) {
      const left = activeElement.offsetLeft;
      const width = activeElement.offsetWidth;
      setUnderlineStyle({ left, width });
    }
  }, [activeAttribute, attributes]);

  const handleAttributeClick = (attribute: string) => {
    setActiveAttribute(attribute);
  };

  const [isMemberLevelingEnabled, setIsMemberLevelingEnabled] = useState<boolean>(false);

  const toggleMemberLeveling = () => {
    setIsMemberLevelingEnabled(!isMemberLevelingEnabled);
  };

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div className={style.rightText}>
          <h1 className={style.mainText}>CODECRAFT</h1>
          <h2 className={style.Text}>DASHBOARD</h2>
        </div>
        <div className={style.attributes}>
          <div className={style.underline} style={{ left: `${underlineStyle.left}px`, width: `${underlineStyle.width}px` }} />
          {attributes.map((attribute, index) => (
            <div
              key={attribute}
              ref={(el) => (attributeRefs.current[index] = el)}
              className={`${style.attribute} ${activeAttribute === attribute ? style.active : ""}`}
              onClick={() => handleAttributeClick(attribute)}
            >
              {attribute}
            </div>
          ))}
        </div>
      </div>

      <div className={style.settingsContainer}>
        <div className={style.inputGroup}>
          <label htmlFor="prefix">Prefix</label>
          <input type="text" id="prefix" name="prefix" className={style.input} placeholder="!" />
        </div>

        <div className={style.languageGroup}>
          <div className={style.inputGroup}>
            <label htmlFor="mainLanguage" className={style.label}>Main Language</label>
            <select id="mainLanguage" name="mainLanguage" className={style.input}>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="commandsLanguage" className={style.label}>Commands Language</label>
            <select id="commandsLanguage" name="commandsLanguage" className={style.input}>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={style.checkboxGroup}>
          <div>
            <input type="checkbox" id="useMessageCommands" name="useMessageCommands" />
            <label htmlFor="useMessageCommands">Use message commands</label>
          </div>
          <div>
            <input type="checkbox" id="disableContextCommands" name="disableContextCommands" />
            <label htmlFor="disableContextCommands">Disable context commands</label>
          </div>
          <div>
            <input type="checkbox" id="deleteMemberInfo" name="deleteMemberInfo" />
            <label htmlFor="deleteMemberInfo">Delete member information after guild leaving</label>
          </div>
        </div>
      </div>

        {/* Toggle Switch */}
        <div className={style.switchContainer}>
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={isMemberLevelingEnabled}
              onChange={toggleMemberLeveling}
            />
            <span className={style.slider}></span>
          </label>
          <span className={style.switchLabel}>
            {isMemberLevelingEnabled ? "Member Leveling Enabled" : "Member Leveling Disabled"}
          </span>
        </div>
    </div>
  );
};

export default GuildPage;
