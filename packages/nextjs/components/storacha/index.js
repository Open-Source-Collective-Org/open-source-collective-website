import React, { useEffect } from 'react';
import { useAuthenticator, Authenticator, useW3, useUploader, Uploader, UploadStatus } from '@w3ui/react';
import { ArrowPathIcon } from '@heroicons/react/20/solid';

function StatusLoader({ progressStatus }) {
    const { total, loaded, lengthComputable } = progressStatus;
    if (lengthComputable) {
        const percentComplete = Math.floor(loaded / total * 100);
        return /*#__PURE__*/ React.createElement("div", {
            className: "relative w2 h5 ba b--white flex flex-column justify-end"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "bg-white w100",
            style: {
                height: `${percentComplete}%`
            }
        }));
    } else {
        return /*#__PURE__*/ React.createElement(ArrowPathIcon, {
            className: "animate-spin h-4 w-4"
        });
    }
}
function UploadLoader({ uploadProgress, className = '' }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: `${className} flex flex-row`
    }, Object.values(uploadProgress).map((status)=>/*#__PURE__*/ React.createElement(StatusLoader, {
            progressStatus: status,
            key: status.url
        })));
}
function Loader() {
    return /*#__PURE__*/ React.createElement(ArrowPathIcon, {
        className: "animate-spin h-12 w-12 mx-auto mt-12"
    });
}

function AuthenticationForm() {
    const [{ submitted }] = useAuthenticator();
    return /*#__PURE__*/ React.createElement("div", {
        className: "authenticator"
    }, /*#__PURE__*/ React.createElement(Authenticator.Form, {
        className: "text-zinc-950 bg-grad rounded-xl shadow-md px-10 pt-8 pb-8"
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        className: "block mb-2 uppercase text-xs font-semibold tracking-wider m-1 font-mono",
        htmlFor: "authenticator-email"
    }, "Email"), /*#__PURE__*/ React.createElement(Authenticator.EmailInput, {
        className: "text-black py-2 px-2 rounded block mb-4 border border-gray-800 w-80 shadow-md",
        id: "authenticator-email",
        required: true
    })), /*#__PURE__*/ React.createElement("div", {
        className: "text-center mt-4"
    }, /*#__PURE__*/ React.createElement("button", {
        className: "inline-block bg-zinc-950 hover:outline text-white font-bold text-sm px-6 py-2 rounded-full whitespace-nowrap",
        type: "submit",
        disabled: submitted
    }, "Authorize"))));
}
function AuthenticationSubmitted() {
    const [{ email }] = useAuthenticator();
    return /*#__PURE__*/ React.createElement("div", {
        className: "authenticator"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "bg-grad rounded-xl shadow-md px-10 pt-8 pb-8"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "text-xl font-semibold"
    }, "Verify your email address!"), /*#__PURE__*/ React.createElement("p", {
        className: "pt-2 pb-4"
    }, "Click the link in the email we sent to ", /*#__PURE__*/ React.createElement("span", {
        className: "font-semibold tracking-wide"
    }, email), " to authorize this agent."), /*#__PURE__*/ React.createElement(Authenticator.CancelButton, {
        className: "inline-block bg-zinc-950 hover:outline text-white font-bold text-sm px-6 py-2 rounded-full whitespace-nowrap"
    }, "Cancel")));
}
function AuthenticationEnsurer({ children }) {
    const [{ submitted, accounts, client }] = useAuthenticator();
    const authenticated = accounts.length > 0;
    if (authenticated) {
        return /*#__PURE__*/ React.createElement(React.Fragment, null, children);
    }
    if (submitted) {
        return /*#__PURE__*/ React.createElement(AuthenticationSubmitted, null);
    }
    if (client != null) {
        return /*#__PURE__*/ React.createElement(AuthenticationForm, null);
    }
    return /*#__PURE__*/ React.createElement(Loader, null);
}

function SpaceEnsurer({ children }) {
    const [{ client }] = useW3();
    useEffect(function() {
        async function ensureCurrentSpace() {
            if (client != null && client.currentSpace() == null) {
                const space = client.spaces().length > 0 ? client.spaces()[0] : await client.createSpace('example space');
                if (space != null) {
                    await client.setCurrentSpace(space.did());
                }
            }
        }
        void ensureCurrentSpace();
    }, [
        client
    ]);
    return client != null ? children : /*#__PURE__*/ React.createElement(Loader, null);
}

function humanFileSize(bytes) {
    const size = (bytes / (1024 * 1024)).toFixed(2);
    return `${size} MiB`;
}
function Uploading({ file, files, storedDAGShards, uploadProgress }) {
    const fileName = files != null && files.length > 1 ? 'your files' : file?.name;
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col items-center w-full"
    }, /*#__PURE__*/ React.createElement("h1", {
        className: "font-bold text-sm uppercase text-zinc-950"
    }, "Uploading ", fileName), /*#__PURE__*/ React.createElement(UploadLoader, {
        uploadProgress: uploadProgress
    }), storedDAGShards?.map(({ cid, size })=>/*#__PURE__*/ React.createElement("p", {
            className: "text-xs max-w-full overflow-hidden text-ellipsis",
            key: cid.toString()
        }, "shard ", cid.toString(), " (", humanFileSize(size), ") uploaded")));
}
function Errored({ error }) {
    useEffect(()=>{
        if (error != null) {
            // eslint-disable-next-line no-console
            console.error('Uploader Error:', error);
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col items-center"
    }, /*#__PURE__*/ React.createElement("h1", null, "⚠️ Error: failed to upload file: ", error?.message), /*#__PURE__*/ React.createElement("p", null, "Check the browser console for details."));
}
const Done = ({ file, files, dataCID, storedDAGShards })=>{
    const cidString = dataCID?.toString() ?? '';
    const fileName = files != null && files.length > 1 ? 'your files' : file?.name;
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", {
        className: "text-gray-800"
    }, "Done!"), /*#__PURE__*/ React.createElement("p", {
        className: "truncate"
    }, cidString), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement("a", {
        href: `https://w3s.link/ipfs/${cidString}`,
        className: "text-blue-800"
    }, "View ", fileName, " on IPFS Gateway.")), /*#__PURE__*/ React.createElement("p", {
        className: "text-gray-800"
    }, "Chunks (", storedDAGShards.length, "):"), storedDAGShards.map(({ cid, size })=>/*#__PURE__*/ React.createElement("p", {
            key: cid.toString(),
            className: "truncate"
        }, cid.toString(), " (", size, " bytes)")));
};
function UploaderConsole() {
    const [{ status, file, files, error, dataCID, storedDAGShards, uploadProgress }] = useUploader();
    switch(status){
        case UploadStatus.Uploading:
            {
                return /*#__PURE__*/ React.createElement(Uploading, {
                    file: file,
                    files: files,
                    storedDAGShards: storedDAGShards,
                    uploadProgress: uploadProgress
                });
            }
        case UploadStatus.Succeeded:
            {
                return /*#__PURE__*/ React.createElement(Done, {
                    file: file,
                    files: files,
                    dataCID: dataCID,
                    storedDAGShards: storedDAGShards
                });
            }
        case UploadStatus.Failed:
            {
                return /*#__PURE__*/ React.createElement(Errored, {
                    error: error
                });
            }
        default:
            {
                return /*#__PURE__*/ React.createElement(React.Fragment, null);
            }
    }
}
function UploaderContents() {
    const [{ status, file, files }] = useUploader();
    const hasFile = file !== undefined;
  
    if (status === UploadStatus.Idle) {
      return hasFile ? (
        <>
          <div className="flex flex-row space-x-2 flex-wrap max-w-xl">
            {files?.map((f, i) => (
              <div className="flex flex-col justify-around" key={i}>
                <span className="text-sm">{f.name}</span>
                <span className="text-xs text-white/75 font-mono">
                  {humanFileSize(f.size)}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button type="submit" className="w3ui-button" disabled={!file}>
              Upload
            </button>
          </div>
        </>
      ) : (
        <></>
      );
    } else {
      return <UploaderConsole />;
    }
  }
const UploaderForm = ({ multiple, allowDirectory }) => {
    const [{ file }] = useUploader();
    const hasFile = file !== undefined;
  
    return (
      <Uploader.Form className="m-12">
        <div className="relative shadow h-52 p-8 rounded-md bg-white/5 hover:bg-white/20 border-2 border-dotted border-zinc-950 flex flex-col justify-center items-center text-center">
          {!hasFile && (
            <label className="block h-px w-px overflow-hidden absolute whitespace-nowrap">
              File:
            </label>
          )}
          <Uploader.Input
            multiple={multiple}
            allowDirectory={allowDirectory}
            className={`${hasFile ? "hidden" : "block absolute inset-0 cursor-pointer w-full opacity-0"}`}
          />

          <UploaderContents />
          {!hasFile && <span>Drag files or Click to Browse</span>}
        </div>
      </Uploader.Form>
    );
  };

export { AuthenticationEnsurer, AuthenticationForm, AuthenticationSubmitted, Loader, SpaceEnsurer, UploadLoader, UploaderForm };
