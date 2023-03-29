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
function CardLayout({ href, icon, title, description }) {
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
    </CardContainer>
  );
}

const SOURCES = new Set([
  "biolink",
  "ctd",
  "drugcentral",
  "gtex",
  "gtopdb",
  "gwas-catalog",
  "hetio",
  "hgnc",
  "hmdb",
  "human-goa",
  "icees-kg",
  "intact",
  "ontological-hierarchy",
  "panther",
  "pharos",
  "robokopkg",
  "string-db",
  "uberongraph",
  "viral-proteome",
  // "automat",
]);

const getMetaData = async (label) => {
  if (!SOURCES.has(label)) {
    return null;
  }

  try {
    const response = await fetch(
      `https://automat.renci.org/${label}/metadata`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { final_node_count, final_edge_count } = await response.json();

    return {
      final_node_count: parseInt(final_node_count).toLocaleString(),
      final_edge_count: parseInt(final_edge_count).toLocaleString(),
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
