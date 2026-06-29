'use client';

import React, { useState } from 'react';
import { WorkspaceSettingsProps } from './WorkspaceSettings.types';

export const WorkspaceSettings: React.FC<WorkspaceSettingsProps> = ({
  members,
  onAddMember,
  onRemoveMember,
  onUpdateRole,
  isLoading = false,
  error = null,
}) => {
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('viewer');

  if (isLoading) return <div className="p-4 text-gray-500">Loading workspace settings...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-6">Workspace Members</h2>

      {/* Add Member Form */}
      <div className="flex gap-4 mb-8 bg-gray-50 p-4 rounded-md">
        <input
          type="email"
          placeholder="email@example.com"
          className="flex-1 p-2 border rounded"
          value={newMemberEmail}
          onChange={(e) => setNewMemberEmail(e.target.value)}
        />
        <select
          value={newMemberRole}
          onChange={(e) => setNewMemberRole(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={() => onAddMember(newMemberEmail, newMemberRole)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Member
        </button>
      </div>

      {/* Member List */}
      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-4 border-b">
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">{member.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={member.role}
                onChange={(e) => onUpdateRole(member.id, e.target.value)}
                className="p-1 border rounded text-sm"
              >
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
              <button
                onClick={() => onRemoveMember(member.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {members.length === 0 && <p className="text-center text-gray-400 py-4">No members found.</p>}
      </div>
    </div>
  );
};
