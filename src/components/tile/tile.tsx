import React, {
  Component,
  ReactNode,
} from "react";
import classNames from "classnames";

import Icon from "./../icon";

export type TileType = "default" | "action" | "icon" | "avatar" | "task" | "article" | "article-with-like-bar" | "board";

export interface TileDetail {
  title?: string;
  label?: ReactNode;
  description: ReactNode;
}

export interface TileProps {
  type?: TileType;
  icon?: string;
  title?: string;
  details: TileDetail[];
}

export class Tile extends Component<TileProps> {
  static defaultProps: Partial<TileProps> = {
    type: "default",
  };

  renderTitle = () => {
    const { title } = this.props;
    if (!title) return null;

    return (
      <h3 className="slds-truncate" title={title}>{ title }</h3>
    );
  }

  renderDetail = () => {
    const { details } = this.props;

    const renderDetailItem = (item: TileDetail, i: number) => {
      const { label, description } = item;
      let title = item.title || "";
      if (typeof label == "string") title = label;
      return (
        <div key={i}>
          {
            !!label && (
              <dt
                className="slds-item_label slds-text-color_weak slds-truncate"
                title={title}
              >
                { label }
              </dt>
            )
          }
          <dd
            className="slds-item_detail slds-truncate"
          >
            { description }
          </dd>
        </div>
      );
    };

    return (
      <div className="slds-tile__detail slds-text-body_small">
        <dl className="slds-list_horizontal slds-wrap">
          {
            details.map((item: TileDetail, i: number) => {
              const { children } = renderDetailItem(item, i).props;
              return children;
            })
          }
        </dl>
    </div>
    );
  }

  renderIcon = () => {
    const { icon } = this.props;
    if (!icon) return null;
    return (
      <span className="slds-icon_container">
        <Icon type={icon} />
      </span>
    );
  }

  renderMedia = () => {
    const { type = "default" } = this.props;
    if (type == "icon") return this.renderIcon();
    return null;
  }

  renderTypeMedia = () => {
    return (
      <article className="slds-tile slds-media">
        <div className="slds-media__figure">
          { this.renderMedia() }
        </div>
        <div className="slds-media__body">
          { this.renderTitle() }
          { this.renderDetail() }
        </div>
      </article>
    );
  }

  renderOtherType = () => {
    const { type = "default" } = this.props;
    if (["icon", "avatar", "task"].includes(type)) return this.renderTypeMedia();

    return null;
  }

  render() {
    const {
      type = "default", // Just for type assertion
    } = this.props;

    const clazz = classNames(
      "slds-tile",
      {
        ["slds-hint-parent"]: ["action"].includes(type),
        ["slds-media"]: ["icon", "avatar", "task"].includes(type),
        ["slds-tile_board"]: ["board"].includes(type),
      },
    );

    if (type != "default") return this.renderOtherType();

    return (
      <article
        className={clazz}
      >
        { this.renderTitle() }
        { this.renderDetail() }
      </article>
    );
  }
}

export default Tile;
