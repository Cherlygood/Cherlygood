"use client";

import { useState, useEffect } from "react";
import { Spinner } from "@/ui/Spinners/Default";
import { useOverlayStore } from "@/zustand/admin/overlayStore";
import { Pencil, ArrowLeft, X } from "lucide-react";
import clsx from "clsx";
import Overlay from "@/ui/Overlay";
import { UpdateCollectionAction } from "@/actions/collections";
import { useAlertStore } from "@/zustand/shared/alertStore";
import { ShowAlertType } from "@/lib/sharedTypes";

export function VisibilityButton() {
  const showOverlay = useOverlayStore((state) => state.showOverlay);
  const pageName = useOverlayStore((state) => state.pages.editCollection.name);
  const overlayName = useOverlayStore(
    (state) => state.pages.editCollection.overlays.visibility.name
  );

  return (
    <button
      onClick={() => showOverlay({ pageName, overlayName })}
      type="button"
      className="w-9 h-9 rounded-full flex items-center justify-center transition duration-300 ease-in-out active:bg-lightgray lg:hover:bg-lightgray"
    >
      <Pencil size={18} strokeWidth={1.75} />
    </button>
  );
}

export function VisibilityOverlay({
  data,
}: {
  data: {
    id: string;
    visibility: string;
  };
}) {
  const DRAFT = "DRAFT";
  const PUBLISHED = "PUBLISHED";
  const HIDDEN = "HIDDEN";

  const [selectedVisibility, setSelectedVisibility] = useState(data.visibility);
  const [loading, setLoading] = useState<boolean>(false);

  const showAlert = useAlertStore((state) => state.showAlert);
  const hideOverlay = useOverlayStore((state) => state.hideOverlay);
  const pageName = useOverlayStore((state) => state.pages.editCollection.name);
  const overlayName = useOverlayStore(
    (state) => state.pages.editCollection.overlays.visibility.name
  );
  const isOverlayVisible = useOverlayStore(
    (state) => state.pages.editCollection.overlays.visibility.isVisible
  );

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      if (!isOverlayVisible && !showAlert) {
        document.body.style.overflow = "visible";
      }
    };
  }, [isOverlayVisible, showAlert]);

  const onHideOverlay = () => {
    setLoading(false);
    hideOverlay({ pageName, overlayName });
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      const result = await UpdateCollectionAction({
        id: data.id,
        visibility: selectedVisibility as VisibilityType,
      });
      showAlert({
        message: result.message,
        type: result.type,
      });
    } catch (error) {
      console.error("Error updating collection:", error);
      showAlert({
        message: "Failed to update collection",
        type: ShowAlertType.ERROR,
      });
    } finally {
      setLoading(false);
      onHideOverlay();
    }
  };

  return (
    <>
      {isOverlayVisible && (
        <Overlay>
          <div className="absolute bottom-0 left-0 right-0 w-full h-[calc(100%-60px)] overflow-hidden md:overflow-visible rounded-t-[20px] bg-white md:w-[360px] md:rounded-2xl md:shadow md:h-max md:mx-auto md:mt-20 md:mb-[50vh] md:relative md:bottom-auto md:left-auto md:right-auto md:top-auto md:-translate-x-0">
            <div className="w-full">
              <div className="md:hidden flex items-end justify-center pt-4 pb-2 absolute top-0 left-0 right-0 bg-white">
                <div className="relative flex justify-center items-center w-full h-7">
                  <h2 className="font-semibold text-lg">Visibility</h2>
                  <button
                    onClick={() => {
                      hideOverlay({ pageName, overlayName });
                      setSelectedVisibility(data.visibility.toUpperCase());
                    }}
                    type="button"
                    className="w-7 h-7 rounded-full flex items-center justify-center absolute right-4 transition duration-300 ease-in-out bg-lightgray active:bg-lightgray-dimmed"
                  >
                    <X color="#6c6c6c" size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:justify-between py-2 pr-4 pl-2">
                <button
                  onClick={() => {
                    hideOverlay({ pageName, overlayName });
                    setSelectedVisibility(data.visibility.toUpperCase());
                  }}
                  type="button"
                  className="h-9 px-3 rounded-full flex items-center gap-1 transition duration-300 ease-in-out active:bg-lightgray lg:hover:bg-lightgray"
                >
                  <ArrowLeft
                    size={20}
                    strokeWidth={2}
                    className="-ml-1 stroke-blue"
                  />
                  <span className="font-semibold text-sm text-blue">
                    Visibility
                  </span>
                </button>
                <button
                  onClick={handleSave}
                  type="button"
                  disabled={loading}
                  className={clsx(
                    "relative h-9 w-max px-4 rounded-full overflow-hidden transition-colors text-white bg-neutral-700",
                    {
                      "bg-opacity-50": loading,
                      "hover:bg-neutral-600 active:bg-neutral-800": !loading,
                    }
                  )}
                >
                  {loading ? (
                    <div className="flex gap-1 items-center justify-center w-full h-full">
                      <Spinner color="white" />
                      <span className="text-white">Saving</span>
                    </div>
                  ) : (
                    <span className="text-white">Save</span>
                  )}
                </button>
              </div>
              <div className="w-max mx-auto mt-[52px] md:mt-0 p-5">
                <div className="w-44 flex flex-col rounded-xl border overflow-hidden">
                  <div className="p-2">
                    <button
                      onClick={() => setSelectedVisibility(DRAFT)}
                      className={clsx(
                        "h-9 w-full px-4 rounded-md flex items-center justify-between ease-out duration-300 transition active:bg-lightgray lg:hover:bg-lightgray",
                        { "bg-lightgray": selectedVisibility === DRAFT }
                      )}
                    >
                      <span>Draft</span>
                      <div
                        className={clsx(
                          "w-5 h-5 rounded-full bg-white",
                          { border: selectedVisibility !== DRAFT },
                          {
                            "border-4 border-blue":
                              selectedVisibility === DRAFT,
                          }
                        )}
                      ></div>
                    </button>
                  </div>
                  <div className="border-t p-2">
                    <button
                      onClick={() => setSelectedVisibility(PUBLISHED)}
                      className={clsx(
                        "h-9 w-full px-4 rounded-md flex items-center justify-between ease-out duration-300 transition active:bg-lightgray lg:hover:bg-lightgray",
                        { "bg-lightgray": selectedVisibility === PUBLISHED }
                      )}
                    >
                      <span>Published</span>
                      <div
                        className={clsx(
                          "w-5 h-5 rounded-full bg-white",
                          { border: selectedVisibility !== PUBLISHED },
                          {
                            "border-4 border-blue":
                              selectedVisibility === PUBLISHED,
                          }
                        )}
                      ></div>
                    </button>
                  </div>
                  <div className="border-t p-2">
                    <button
                      onClick={() => setSelectedVisibility(HIDDEN)}
                      className={clsx(
                        "h-9 w-full px-4 rounded-md flex items-center justify-between ease-out duration-300 transition active:bg-lightgray lg:hover:bg-lightgray",
                        { "bg-lightgray": selectedVisibility === HIDDEN }
                      )}
                    >
                      <span>Hidden</span>
                      <div
                        className={clsx(
                          "w-5 h-5 rounded-full bg-white",
                          { border: selectedVisibility !== HIDDEN },
                          {
                            "border-4 border-blue":
                              selectedVisibility === HIDDEN,
                          }
                        )}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden w-full pb-5 pt-2 px-5 absolute bottom-0">
              <button
                onClick={handleSave}
                type="button"
                disabled={loading}
                className={clsx(
                  "relative h-12 w-full rounded-full overflow-hidden transition-colors text-white bg-neutral-700",
                  {
                    "bg-opacity-50": loading,
                    "hover:bg-neutral-600 active:bg-neutral-800": !loading,
                  }
                )}
              >
                {loading ? (
                  <div className="flex gap-1 items-center justify-center w-full h-full">
                    <Spinner />
                    <span className="text-white">Saving</span>
                  </div>
                ) : (
                  <span className="text-white">Save</span>
                )}
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
