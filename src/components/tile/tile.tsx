import React, { Component, ReactChild } from "react";

export interface TileProps {
  className?: string;
  label: {
    title?: string;
    value: ReactChild;
  };
  detail: {
    title?: string;
    value: ReactChild;
  };
}

export interface TileState {
  tooltipPosition: Partial<React.CSSProperties>,
}

export class Tile extends Component<TileProps, TileState> {
  detailRef: HTMLElement;

  state: TileState = {
    tooltipPosition: { top: 0, left: 0 },
  };

  componentDidMount() {
    let nextPosition = { top: 0, left: 0 };
    if (!this.detailRef) return;
    nextPosition = {
      top: this.detailRef.clientHeight + 12,
      left: this.detailRef.offsetLeft,
    };
    this.setState({ tooltipPosition: nextPosition });
  }

  render() {
    const {
      label,
      detail,
    } = this.props;

    return (
      <article className="slds-tile">
        <div className="slds-tile__detail slds-text-body_small">
          <div
            className="slds-popover slds-popover_tooltip slds-nubbin_top-left"
            role="tooltip"
            id="help"
            style={{ position: "absolute", ...this.state.tooltipPosition }}
          >
            <div className="slds-popover__body">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <dl className="slds-list_horizontal slds-wrap">
            <dt
              className="slds-item_label slds-text-color_weak slds-text-align_right slds-truncate"
              title={label.title}
            >
              { label.value }
            </dt>
            <dd
              className="slds-item_detail slds-text-align_left slds-truncate"
              title={detail.title}
              ref={detailRef => {
                if (detailRef) this.detailRef = detailRef;
              }}
            >
              { detail.value }
            </dd>
          </dl>
        </div>
      </article>
    );
  }
}

export default Tile;
