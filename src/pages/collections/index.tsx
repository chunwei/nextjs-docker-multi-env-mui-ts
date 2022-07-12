/*
 * @Author: Chunwei Lu
 * @Date: 2022-06-28 22:12:44
 * @LastEditTime: 2022-07-01 11:06:00
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/pages/collections/index.tsx
 */
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CollectionIndex = () => {
  const { t } = useTranslation("common");
  return (
    <div className="collection-page">
      <h2 className="title">{t("collection")}</h2>
      <div>All Collection of Selected Chain</div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default CollectionIndex;
