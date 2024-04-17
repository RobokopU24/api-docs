import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  findFirstCategoryLink,
  useDocById,
} from "@docusaurus/theme-common/internal";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer)}
    >
      {children}
    </Link>
  );
}
function CardLayout({ href, icon, title, description, info }) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx("text--truncate", styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p
          className={clsx("text--truncate", styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
      {info && (
        <p title={info} className={styles.info}>
          {info}
        </p>
      )}
    </CardContainer>
  );
}

const SOURCES = new Map([
  ["ROBOKOP KG", "robokopkg"],
  ["BINDING", "binding-db"],
  ["CAM KG", "cam-kp"],
  ["CTD", "ctd"],
  ["DrugCentral", "drugcentral"],
  ["Alliance of Genome Resources", "genome-alliance"],
  ["GTEx", "gtex"],
  ["GtoPdb", "gtopdb"],
  ["GWAS Catalog", "gwas-catalog"],
  ["Hetionet", "hetio"],
  ["HGNC", "hgnc"],
  ["HMDB", "hmdb"],
  ["Human GOA", "human-goa"],
  ["ICEES KG", "icees-kg"],
  ["IntAct Molecular Interaction Database", "intact"],
  ["PANTHER", "panther"],
  ["Pharos", "pharos"],
  ["Reactome", "reactome"],
  ["Monarch KG", "monarch-kg"],
  ["SRI Reference KG", "sri-reference-kg"],
  ["STRING", "string-db"],
  ["Text Mining Provider KG", "textminingkp"],
  ["Ubergraph", "ubergraph"],
  ["Viral Proteome", "viral-proteome"],
]);

const getMetaData = async (label) => {
  if (!SOURCES.has(label)) {
    return null;
  }

  try {
    const response = await fetch(
      `https://robokop-automat.apps.renci.org/${SOURCES.get(label)}/metadata`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { final_node_count, final_edge_count, graph_description } =
      await response.json();

    return {
      final_node_count: parseInt(final_node_count).toLocaleString(),
      final_edge_count: parseInt(final_edge_count).toLocaleString(),
      description: graph_description,
    };
  } catch {
    return null;
  }
};

function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront

  const [md, setMd] = useState(null);
  useEffect(() => {
    (async () => {
      setMd(await getMetaData(item.label));
    })();
  }, []);

  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={translate(
        {
          message:
            !md ||
            md.final_edge_count === "NaN" ||
            md.final_node_count === "NaN"
              ? "{count} items"
              : "{final_node_count} nodes, {final_edge_count} edges",
          id: "theme.docs.DocCard.categoryDescription",
          description:
            "The default description for a category card in the generated index about how many items this category includes",
        },
        {
          count: item.items.length,
          final_node_count: md?.final_node_count,
          final_edge_count: md?.final_edge_count,
        }
      )}
      info={md?.description}
    />
  );
}
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? "📄️" : "🔗";
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
    />
  );
}
export default function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
