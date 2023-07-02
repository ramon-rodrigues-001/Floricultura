import styles from "./accordion.module.scss";

export default function Accordion() {

    function active(content: string) {
        alert('hello')
        const accordionContent = document.querySelector(`#${content}`)
        accordionContent.classList.toggle(".accordionContentOff");
        accordionContent.classList.toggle("accordionContentOn");
    }

    return (
        <section className={styles.sectionAccordion}>

            <p className={styles.subTitle}>DUVIDAS</p>
            <h2 className={styles.title}>
                Ficou com alguma dúvida?
            </h2>
            
            <div className={styles.content}>
                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader} onClick={() => {active("content-1")}}>
                        <span>
                            ITEM _ 1
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContentOff} id="content-1">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader} onClick={() => {active("content-2")}}>
                        <span>
                            ITEM _ 2
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContentOff} id="content-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader} onClick={() => {active("content-3")}}>
                        <span>
                            ITEM _ 3
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContentOff} id="content-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader} onClick={() => {active("content-3")}}>
                        <span>
                            ITEM _ 3
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContentOff} id="content-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader} onClick={() => {active("content-3")}}>
                        <span>
                            ITEM _ 3
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContentOff} id="content-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}